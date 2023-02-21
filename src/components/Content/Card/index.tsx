import './style.css'
function Card() {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-image">
                    <img className="image" src="https://fotografiamais.com.br/wp-content/uploads/2017/02/shutterstock_168159572.jpg" alt="Course Name" />
                </div>
                <div className="card-description">
                    <h2 className="card-title">Nome do Curso</h2>
                    <p className="description">
                        Breve descrição do Curso
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img className="image" src="https://fotografiamais.com.br/wp-content/uploads/2017/02/shutterstock_168159572.jpg" alt="Course Name" />
                </div>
                <div className="card-description">
                    <h2 className="card-title">Nome do Curso</h2>
                    <p className="description">
                        Breve descrição do Curso
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img className="image" src="https://fotografiamais.com.br/wp-content/uploads/2017/02/shutterstock_168159572.jpg" alt="Course Name" />
                </div>
                <div className="card-description">
                    <h2 className="card-title">Nome do Curso</h2>
                    <p className="description">
                        Breve descrição do Curso
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card;