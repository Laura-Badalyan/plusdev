import MainFooter from "./MainFooter";
import nork from "./images/nork-logo.png"


const DefaultFooter = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <MainFooter>
                <img src={nork} style={{ width: '65px', zIndex: '999', opacity: '1' }} alt="" />
                <p style={{ 'margin': '0 10px' }}>© «Նորք» տեխնոլոգիաների կենտրոն {year}</p>
            </MainFooter>
        </>
    );
};

export default DefaultFooter;
