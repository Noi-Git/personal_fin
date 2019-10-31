/* === GROUP BY SYNTAX=== */
SELECT column_names
FROM table
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

/* SAMPLE */
SELECT country, COUNT(*)
FROM customers
GROUP BY country
ORDER BY COUNT(*) DESC;

SELECT categoryname, COUNT(*)
FROM categories
JOIN produces ON products.categoryid=categories.categoryid
GROUP BY categoryname
ORDER BY COUNT(*) DESC;

SELECT productname, SUM(order_details.unitprice*quantity)
FROM products
JOIN order_details ON product.productid=order_details.productid
JOIN orders ON orders.orderid=order_details.orderid
WHERE orderdate BETWEEN '1997-01-01' AND '1997-12-31'
GROUP BY productname
ORDER BY SUM(order_details.unitprice*quantity);

/* === HAVING SYNTAX===*/
SELECT column_names
FROM table
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

/* SAMPLE */
SELECT productname, SUM(quatity * order_details.unitprice) AS AmountBought
FROM products
JOIN order_details USING (priductid)
GROUP BY procuctname
HAVING SUM(quantity * order_details.unitprice) < 2000
ORDER BY AmountBought ASC;

SELECT companyname, SUM(quantity * order_details.unitprice) AS AmountBought
FROM customers
NATURAL JOIN orders
NATURAL JOIN order_details
GROUP BY companyname
HAVING SUM(quantity * order_details.unitprice) > 5000
ORDER BY AmountBought DESC;