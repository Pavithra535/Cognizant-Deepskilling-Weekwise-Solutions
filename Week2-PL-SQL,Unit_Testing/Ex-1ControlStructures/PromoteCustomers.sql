BEGIN
  FOR rec IN (
    SELECT CustomerID
    FROM CUSTOMERS
    WHERE Balance > 10000
  )
  LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'Y'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for customers with balance over $10,000.');
END;
/
