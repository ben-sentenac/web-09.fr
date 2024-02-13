import './service-card.css';

function ServiceCard({ icon, title,description,children}) {
    return (
        <div className="card-wrapper mb-9 xl:mx-5">
            <div className="card-box text-center">
                <div className="icon-wrapper">
                        <img src={ icon } alt="" />
                </div>
                <h5 className="card-title mb-5 text-2xl" ><strong>{ title }</strong></h5>
                <p className="card-text mb-8">{ description }</p>
                 { children }
            </div>
        </div>
    );
}

export default ServiceCard;