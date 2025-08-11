CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR rec IN (
    SELECT AccountID, Balance
    FROM ACCOUNTS
    WHERE UPPER(AccountType) = 'SAVINGS'
  )
  LOOP
    UPDATE ACCOUNTS
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = rec.AccountID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
END;
/
