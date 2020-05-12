import React from "react";
import Contact from './Contact';
import Loading from '../components/Loading';

class Contacts extends React.Component {
	render() {
		const contacts = this.props.contacts;
		const loading = this.props.loading;
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data"> Nome </span>
						<span className="contact__data"> Telefone</span>
						<span className="contact__data"> País</span>
						<span className="contact__data"> Admissão</span>
						<span className="contact__data"> Empresa</span>
						<span className="contact__data"> Departamento</span>
					</article>
					{loading ? <Loading/> : null}
					{
						contacts &&
						contacts.map(contact => {
							return <Contact data={contact} key={contact.id} />
						})	
					}
				</section>
			</div>
		);
	}
}

export default Contacts;
