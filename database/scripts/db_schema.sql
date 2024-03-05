--signup user details
CREATE TABLE nomad_users (
        id		                SERIAL          PRIMARY KEY,
		name				    VARCHAR(100), 
		password                VARCHAR(250),
	    email				    VARCHAR(250),
	    phone_no			    VARCHAR(50),
	    image				    VARCHAR(300),
	    is_active               BOOLEAN,
	    created_at              TIMESTAMP
)