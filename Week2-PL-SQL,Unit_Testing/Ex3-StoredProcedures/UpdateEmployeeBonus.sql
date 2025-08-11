CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  p_DepartmentID IN NUMBER,
  p_BonusPercent IN NUMBER
) AS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * (p_BonusPercent / 100))
  WHERE DepartmentID = p_DepartmentID;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Bonus applied to department ' || p_DepartmentID);
END;
/
