DECLARE
  v_due_days NUMBER;
BEGIN
  FOR rec IN (
    SELECT c.Name, l.DueDate
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    v_due_days := rec.DueDate - SYSDATE;
    DBMS_OUTPUT.PUT_LINE('Reminder: ' || rec.Name || 
                         ', your loan is due in ' || v_due_days || ' days.');
  END LOOP;
END;
/
