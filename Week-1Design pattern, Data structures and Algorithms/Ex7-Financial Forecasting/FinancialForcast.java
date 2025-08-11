public class FinancialForecast {

    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 1000.0; 
        double growthRate = 0.05;     
        int years = 10;               

        double futureValue = predictFutureValue(initialValue, growthRate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}
