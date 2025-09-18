CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
phone_number VARCHAR(15) UNIQUE NOT NULL,
otp VARCHAR(6)
);

CREATE TABLE IF NOT EXISTS hospitals (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
latitude DECIMAL(10, 8) NOT NULL,
longitude DECIMAL(11, 8) NOT NULL,
contact_number VARCHAR(15)
);

-- Seed some sample hospital data
INSERT INTO hospitals (name, address, latitude, longitude, contact_number) VALUES
('Humanitarian Clinic 1', '123 Aid St, City A', 34.052235, -118.243683, '111-222-3333'),
('Refugee Health Center', '456 Safe Ave, City B', 34.052235, -118.243683, '444-555-6666'),
('Community Medical Unit', '789 Help Rd, City C', 34.052235, -118.243683, '777-888-9999');