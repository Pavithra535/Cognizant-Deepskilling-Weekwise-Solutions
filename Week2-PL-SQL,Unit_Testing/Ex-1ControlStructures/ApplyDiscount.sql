BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.InterestRate
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60
  )
  LOOP
    UPDATE LOANS
    SET InterestRate = InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;
  
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('1% discount applied to all customers above 60.');
END;
/
