import React, { useState } from "react";
import "./main.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import vector from "../../images/vector.png"
import paypal from "../../images/paypal.png"
import visa from "../../images/visa.png"
import american from "../../images/american.png"
import visa1 from "../../images/visa1.png"
import audience from "../../images/audience.png"
import privato from "../../images/privato.png"
const Main = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="container mb-5">
    {/*first cont*/}
    <div className="mt-5">
    <h2>PRENOTA SERVIZIOIN STORE</h2>
    <p>
    All’interno delle strutture e dei mezzi ParkinGO è necessario
    indossare la mascherina e rispettare la distanza di sicurezza
    interpersonale.
    </p>
    </div>
    
    {/*second cont*/}
    <div className="mt-5">
    <h5>01. Prenota ora i tamponi in Drive-in</h5>
    <div className="mt-2 services">
    <div className="d-md-flex justify-content-between text-center">
    <div className="d-md-flex justify-content-between">
    
    <div className="mx-2"><img src={vector} alt="parking"/></div>
    <div className="parking-label">ParkingGO Malpensa</div>
    </div>
    <div className="text-decoration-underline">Modiﬁca negozio</div>
    </div>
    </div>
    </div>
    
    {/*Prenota*/}
    <div className="mt-5">
    <h5>02. Prenota ora i tamponi in Drive-in</h5>
    <div className="d-md-flex justify-content-start text-center">
    <div className="card-gray">
    <p>Tampone Rapido Antigenico</p>
    <div className="d-flex justify-content-between">
    <div className="text">50$</div>
    <div className="mx-2 text">
    {" "}
    Qta
    <select className="mx-2 form-select-sm">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    </select>
    </div>
    </div>
    </div>
    <div className="card-green mx-md-2 my-2 my-md-0">
    <p>Tampone Molecolare PCR</p>
    <div className="d-flex justify-content-between">
    <div className="text">95$</div>
    <div className="mx-2 text">
    {" "}
    Qta
    <select className="mx-2 form-select-sm">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    </select>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    {/*Data*/}
    <div className="mt-5">
    <h5 className="mb-3">03. Scegli fra le date e orari disponibili</h5>
    <h5>Date</h5>
    <div className="row text-center text-md-start">
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-gray">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-gray">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-green">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button type="button" className="btn btn-lg btn-white">
    lunedi27
    </button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">lunedi27</button>
    </div>
    </div>
    </div>
    
    {/*orari*/}
    <div className="mt-5">
    <h5>Orari</h5>
    <div className="row text-center text-md-start">
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-gray">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-gray">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-green">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button type="button" className="btn btn-lg btn-white">
    10:00
    </button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white">10:00</button>
    </div>
    <div className="col-6 col-md-2">
    <button className="btn btn-lg btn-white"> 10:00 </button>
    </div>
    </div>
    </div>
    
    {/*04. Dati anagrafici*/}
    <div className="mt-5">
    <h5>04. Dati anagrafici</h5>
    </div>
    <div className="row mt-3 ">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Nome
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label" >
    Cognome
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input3" className="form-label">
    Email
    </label>
    
    <input
    type="email"
    className="form-control form-control-sm btn-white"
    id="input3"
    />
    <p className="mt-2">
    La conferma verrà invita a questa mail. Si richiede di utilizzare la
    mail propria personale non mail aziendali
    </p>
    </div>
    <div className="col-md-6">
    <label htmlFor="input2 " className="form-label ">
    Cellulare
    </label>
    <PhoneInput
    country={"it"}
    value={phone}
    inputStyle={{
      width: "100%",
    }}
    onChange={(phone) => setPhone(phone)}
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Nazionalita
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Code di fiscale
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Data di nascita
    </label>
    <input
    type="date"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Sesso
    </label>
    <br></br>
    <div class="form-check form-check-inline">
    <input
    class="form-check-input "
    type="radio"
    id="inlineCheckbox1"
    value="option1"
    />
    <label class="form-check-label" for="inlineCheckbox1">
    M
    </label>
    </div>
    <div class="form-check form-check-inline">
    <input
    class="form-check-input"
    type="radio"
    id="inlineCheckbox2"
    value="option2"
    />
    <label class="form-check-label" for="inlineCheckbox2">
    F
    </label>
    </div>
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Comune residenca
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Cap
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Indirizzo
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    </div>
    
    <div className="mt-3">
    <div class="form-check">
    <input
    class="form-check-input "
    type="checkbox"
    value=""
    id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
    Ho preso visione dell’informativa sul trattamento dei miei dati
    personali e i Termini e Condizioni *(leggi)
    </label>
    </div>
    <div class="form-check">
    <input
    class="form-check-input "
    type="checkbox"
    value=""
    id="flexCheckChecked"
    />
    <label class="form-check-label" for="flexCheckChecked">
    Ho preso visione dell’informativa sul trattamento dei miei dati
    personali e do il consenso al loro trattamento da parte di Medispa
    S.r.l. quale unico Responsabile Esterno del trattamento dei dati
    sanitari. * (leggi)
    </label>
    </div>
    <div className="mt-5">
    <button className="btn btn-gray btn-round">AVANTI</button>
    </div>
    </div>
    
    <div className="mt-5">
    <h5>05. Tipo di ricevuta</h5>
    <p className="mt-3">A chi dovrà essere intestata la fattura?</p>
    <br></br>
    <div className="d-md-flex justify-content-start text-center">
    <div className="card-gray ardencia">
    <img src={audience} alt=""></img> Azienda
    <div className="d-flex justify-content-between">
    <div className="mx-2 text"> </div>
    </div>
    </div>
    <div className="card-green mx-lg-2 my-2 my-md-0 privato">
    <img src={privato} alt=""></img> Privato
    <div className="d-flex justify-content-between">
    <div className="mx-2 text"> </div>
    </div>
    </div>
    </div>
    </div>
    
    <div className="mt-5">
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Nome
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Cogname
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6 ">
    <label htmlFor="input1" className="form-label">
    Codice Fiscale
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Email invio fattura
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label">
    Indirizzo
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Citta
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label ">
    Cap
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    </div>
    <div className="col-md-6">
    <label htmlFor="input2" className="form-label">
    Provinzia
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input2"
    />
    </div>
    </div>
    
    <div className="row mt-3">
    <div className="col-md-6">
    <label htmlFor="input1" className="form-label ">
    Nazione
    </label>
    <input
    type="text"
    className="form-control form-control-sm btn-white"
    id="input1"
    />
    <div className="mt-5">
    <button className="btn btn-green btn-round"> VERIFICA </button>
    </div>
    </div>
    </div>
    </div>
    
    {/*credit card*/}
    <h5 className="mt-5">06. Metodo di pagamento</h5>
    
    <p className="mt-5"> Carta di credito   <img src={visa} alt="" /> <img src={visa1} alt="" />  <img src={american} alt="" /></p>
    
    <div className="credit-card mt-5">
    <div>
    <label htmlFor="input4" className="form-label">
    Provinzia
    </label>
    <input
    type="text"
    className="form-control form-control-sm"
    id="input4"
    />
    </div>
    <div className="row mt-3">
    <div className="col-6">
    <label htmlFor="input5" className="form-label">
    Data di scandeza
    </label>
    <input
    type="text"
    className="form-control form-control-sm"
    id="input5"
    />
    </div>
    <div className="col-6">
    <label htmlFor="input6" className="form-label">
    CVC/CVV
    </label>
    <input
    type="text"
    className="form-control form-control-sm"
    id="input6"
    />
    </div>
    </div>
    
    <div className="mt-3">
    <label htmlFor="input7" className="form-label">
    Nome sualla carta
    </label>
    <input
    type="text"
    className="form-control form-control-sm"
    id="input7"
    />
    </div>
    </div>
    
    <div className="mt-3">
    <div className="col-md-6">
    <br></br>
    <div class="form-check form-check mb-3">
    <input
    class="form-check-input"
    type="radio"
    id="inlineCheckbox1"
    value="option1"
    />
    <label class="form-check-label" for="inlineCheckbox1">
    PayPal   <img src={paypal} alt="" className="paypal-logo"/> Che cos’e PayPal?
    </label>
    </div>
    <div class="form-check form-check-inline mb-3">
    <input
    class="form-check-input"
    type="radio"
    id="inlineCheckbox2"
    value="option2"
    />
    <label class="form-check-label" for="inlineCheckbox2">
    GooglePay
    </label>
    </div>
    </div>
    
    <div class="form-check mb-3">
    <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
    Ho preso visione dell’informativa sul trattamento dei miei dati
    personali e i Termini e Condizioni *(leggi)
    </label>
    </div>
    <div class="form-check mb-3">
    <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckChecked"
    />
    <label class="form-check-label" for="flexCheckChecked">
    Ho preso visione dell’informativa sul trattamento dei miei dati
    personali e do il consenso al loro trattamento da parte di Medispa
    S.r.l. quale unico Responsabile Esterno del trattamento dei dati
    sanitari. * (leggi)
    </label>
    </div>
    
    <div class="form-check mb-3">
    <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckChecked"
    />
    <label class="form-check-label" for="flexCheckChecked">
    Ho preso visione dell’informativa sul trattamento dei miei dati
    personali e do il consenso al loro trattamento da parte di Medispa
    S.r.l. quale unico Responsabile Esterno del trattamento dei dati
    sanitari. * (leggi)
    </label>
    </div>
    </div>
    
    <div className="mt-5">
    <button className="btn btn-green btn-round">CONFERMA E PAGA</button>
    </div>
    </div>
    );
  };
  
  export default Main;
  