import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class DatePayloadFormatter implements NestMiddleware {
  constructor() {}

  async use(req: Request, res: Response, next: NextFunction) {
    req.body["startDate"] = req.body["startDate"] + " 01:30:00+00";

    let date = new Date(req.body["endDate"]);
    let lastDate = this.getLastDate(date.getFullYear(), date.getMonth());

    let endDate;

    if (date.getDate() === lastDate) {
      let y, m, d;
      if (date.getMonth() === 11) {
        y = date.getFullYear() + 1;
        m = 1;
      } else {
        y = date.getFullYear();
        m = date.getMonth() + 2;
      }

      d = 1;
      endDate = new Date(`${y}-${m}-${d}`);
    } else {
      let y, m, d;

      y = date.getFullYear();

      m = date.getMonth() + 1;

      d = date.getDate() + 1;

      endDate = new Date(`${y}-${m}-${d}`);
    }

    req.body["endDate"] =
      endDate.getFullYear() +
      "-" +
      ((endDate.getMonth() + 1) < 10
        ? "0" + (endDate.getMonth() + 1)
        : endDate.getMonth() + 1) +
      "-" +
      (endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate()) +
      " 01:29:59+00";

    next();
  }

  getLastDate(y, m) {
    return new Date(y, m + 1, 0).getDate();
  }
}
