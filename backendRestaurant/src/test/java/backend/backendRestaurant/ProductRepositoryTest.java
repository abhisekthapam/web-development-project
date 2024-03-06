package backend.backendRestaurant;

import backend.backendRestaurant.model.Product;
import backend.backendRestaurant.repository.ProductRepository;
import backend.backendRestaurant.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProductRepositoryTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllProducts() {
        List<Product> products = Arrays.asList(new Product(), new Product());
        when(productRepository.findAll()).thenReturn(products);
        List<Product> result = productService.getAllProducts();
        assertEquals(2, result.size());
    }

    @Test
    void testSaveProduct() {
        Product product = new Product();
        when(productRepository.save(product)).thenReturn(product);
        Product savedProduct = productService.saveProduct(product);
        assertNotNull(savedProduct);
    }

    @Test
    void testDeleteProduct() {
        Long productId = 1L;
        productService.deleteProduct(productId);
        verify(productRepository, times(1)).deleteById(productId);
    }

    @Test
    void testGetProductById() {
        Long productId = 1L;
        Product product = new Product();
        when(productRepository.findById(productId)).thenReturn(Optional.of(product));
        Optional<Product> result = productService.getProductById(productId);
        assertTrue(result.isPresent());
    }

    @Test
    void testUpdateProduct() throws IOException {
        Long productId = 1L;
        String name = "Updated Name Abhisek";
        String description = "Updated Description Done";
        int quantity = 10;
        MultipartFile image = null;
        double price = 20.0;
        Product product = new Product();
        product.setId(productId);
        product.setName("Initial Name Abhi");
        product.setDescription("Initial Description Ongoing");
        product.setQuantity(5);
        product.setPrice(15.0);
        when(productRepository.findById(productId)).thenReturn(Optional.of(product));
        productService.updateProduct(productId, name, description, quantity, image, price);
        assertEquals(name, product.getName());
        assertEquals(description, product.getDescription());
        assertEquals(quantity, product.getQuantity());
        assertEquals(price, product.getPrice());
    }
}
