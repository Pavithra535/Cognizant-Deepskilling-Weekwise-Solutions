public static Product linearSearch(Product[] products, String name) {
    for (Product p : products) {
        if (p.productName.equalsIgnoreCase(name)) {
            return p; 
        }
    }
    return null;
}
