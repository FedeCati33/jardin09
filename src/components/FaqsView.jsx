import './faqs.css'

const FaqsView = () => {

  return (
    <>
      <div className="faqs-container">
        <h1>FAQ's </h1>

        <div className="faqs-content">
          <h2>¿Qué formas de pago puedo usar para realizar mi compra?</h2>
          <p>Podes abonar por mercado pago, transferencia bancaria o efectivo al recibir.</p>
          <p>El costo de envío será mostrado en base al total de la compra y ubicación, en el checkout, en el momento previo a la compra.</p>
        </div>
        <div className="faqs-content">
          <h2>¿Cómo se realizan los envíos?</h2>
          <p>Contamos con servicio de mensajeria propia para envios en CABA y Gran Bs. As. y envios a todo el pais por "Correo Argentino"</p>
          <p>¡Consulta cual es valor en tu zona!</p>
        </div>
        <div className="faqs-content">
          <h2>¿Hacen envios a todo el país?</h2>
          <p>Realizamos envíos a todo el país por correo argentino y contamos con servicio de mensajeria propia en CABA y Gran Bs. As</p>
        </div>
        <div className="faqs-content">
          <h2>¿Cuánto tarda en llegar el pedido?</h2>
          <p>Gracias a nuestro sistema de trazabilidad nos comprometemos en que tu pedido llegue entre 24 a 72hs habiles. </p>
          <p>El tiempo de entrega dependerá del tipo de envío seleccionado. </p>
        </div>
        <div className="faqs-content">
          <h2>¿Cuentan con asesoria profesional?</h2>
          <p>Trabajamos en conjunto con médicos clinicos, psiquiatras, neurologos y un equipo interdisciplinario de salud para asegurar el mejor resultado y tratamiento a los usuarios. </p>
        </div>
        <div className="faqs-content">
          <h2>¿Qué debo hacer si el producto no llega en buen estado?</h2>
          <p>Ponte en contacto con nosotros a ventas@jardin09.com y te enviaremos uno nuevo.</p>
        </div>
      </div>
    </>
  )
}

export default FaqsView;