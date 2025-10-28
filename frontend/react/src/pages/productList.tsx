import { Box, Button, Card, Flex, Table, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <div className="product-card-container">
        <div className="product-card-grid">
          {products.map((product) => (
          <Card.Root
            className="product-card"
            key={product.id}
          >
            <Card.Header>
              <Text color={"red.300"} fontWeight={"bold"} fontSize={"xl"}>
                {product.product_name}
              </Text>
            </Card.Header>
            <Card.Body className="product-card-body">
              <Text color={"blackAlpha.800"} fontWeight={"light"} fontSize={"md"}>{product.product_description}</Text>
              <Text color={"blackAlpha.800"} fontWeight={"light"} fontSize={"sm"}>
                RM {product.product_price}
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button variant={"solid"} bg={"red.200"}>
                <Text color={"blackAlpha.800"}>View</Text>
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
  
        </div>
        
    </div>
    </>
  );
}

export default ProductList;
