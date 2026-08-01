import "./Home.css";
import MainArea from "../../components/MainArea/MainArea";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function Home() {

    const username = "Usuario";

    // Por ahora son datos de prueba.
    // Después los vamos a obtener desde la API.
    const productsCount = 18;
    const categoriesCount = 5;

    return (

        <MainArea username={username}>

            <div className="summary-container">

                <SummaryCard
                    title="Productos"
                    count={productsCount}
                    listRoute="/products"
                    newRoute="/products/new"
                    type="product"
                />

                <SummaryCard
                    title="Categorías"
                    count={categoriesCount}
                    listRoute="/categories"
                    newRoute="/categories/new"
                    type="category"
                />

            </div>

        </MainArea>

    );
}

export default Home;