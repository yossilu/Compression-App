
CREATE TABLE IF NOT EXISTS party_transactions(
    traidingParty VARCHAR(255) NOT NULL,
    counterparty VARCHAR(255) NOT NULL,
    amount INTEGER
);
