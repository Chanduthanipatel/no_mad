export const SKIP_RECORDS = (obj: {
  readonly perPage: number;
  readonly page: number;
}) => obj.perPage * (obj.page - 1);
