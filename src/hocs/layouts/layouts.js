import connect from 'react-redux/es/connect/connect';

function Layout({children}){
    return (
        <div>
            {children}
        </div>
    );
}

const mapStateToProps = (state) => {
};

export default connect(mapStateToProps)(Layout);