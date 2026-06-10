import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

export default function HomePage(){
    return(  
        <>
            <div className="flex flex-col min-h-screen">
                <TopBar />
                <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
                
                    <h1 className="text-3xl font-semibold">PLACEHOLDER</h1>
                
                </main>
                <Footer />
            </div>
        </>
    );
    
}