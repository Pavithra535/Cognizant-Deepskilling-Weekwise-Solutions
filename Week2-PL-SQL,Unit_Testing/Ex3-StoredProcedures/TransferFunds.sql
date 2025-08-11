CREATE OR REPLACE PROCEDURE TransferFunds(
  p_SourceAccountID IN NUMBER,
  p_TargetAccountID IN NUMBER,
  p_Amount          IN NUMBER
) AS
  v_SourceBalance NUMBER;
BEGIN
  -- Get source account balance
  SELECT Balance INTO v_SourceBalance
  FROM ACCOUNTS
  WHERE AccountID = p_SourceAccountID
  FOR UPDATE;

  -- Check if sufficient funds
  IF v_SourceBalance < p_Amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
  END IF;

  -- Deduct from source
  UPDATE ACCOUNTS
  SET Balance = Balance - p_Amount
  WHERE AccountID = p_SourceAccountID;

  -- Add to target
  UPDATE ACCOUNTS
  SET Balance = Balance + p_Amount
  WHERE AccountID = p_TargetAccountID;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_Amount || ' completed successfully.');
END;
/
