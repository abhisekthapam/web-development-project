import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        image: null,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id, imageName) => {
        setDeleteConfirmation({ id, imageName });
    };

    const handleUpdate = (product) => {
        setUpdateData(product);
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: null
        });
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`/api/products/${deleteConfirmation.id}`);
            setProducts(products.filter(product => product.id !== deleteConfirmation.id));
        } catch (error) {
            console.error('Error deleting product:', error);
        } finally {
            setDeleteConfirmation(null);
        }
    };

    const handleCancelUpdate = () => {
        setUpdateData(null);
    };

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataUpdate = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataUpdate.append(key, formData[key]);
            });
            await axios.put(`/api/products/${updateData.id}`, formDataUpdate);
            const response = await axios.get('/api/products');
            setProducts(response.data);
            setUpdateData(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-gray-800 text-lg font-bold mb-2">Price: ${product.price}</p>
                            <p className="text-gray-800 text-lg font-bold mb-2">Quantity: {product.quantity}</p>
                            <div className="flex">
                                <button onClick={() => handleDelete(product.id, product.imageName)} className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2 mr-2">
                                    Delete
                                </button>
                                <button onClick={() => handleUpdate(product)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {deleteConfirmation && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Delete Product</h2>
                        <p>Product ID: {deleteConfirmation.id}</p>
                        <button onClick={confirmDelete} className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                            OK
                        </button>
                        <button onClick={() => setDeleteConfirmation(null)} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4 ml-2">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            {updateData && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Update Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4">
                                    Update
                                </button>
                                <button onClick={handleCancelUpdate} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4 ml-2">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
