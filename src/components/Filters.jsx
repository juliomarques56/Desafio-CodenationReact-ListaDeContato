import React from 'react';
import SearchButton from './SearchButton';
import FilterSearchInput from './FilterSearchInput';
import FilterButton from './FilterButton';

class Filters extends React.Component {

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<FilterSearchInput handleContactsSearch={this.props.handleContactsSearch}/>
						<SearchButton/>
					</div>
					<FilterButton
						text="Nome"
						name="name"
						handleClick={event => this.props.handleClick(event, 'name')}
						isSelected = {this.props.selected === "name"}
					/>
					<FilterButton
						text="País"
						name="country"
						handleClick={event => this.props.handleClick(event, 'country')}
						isSelected = {this.props.selected === "country"}
					/>
					<FilterButton
						text="Empresa"
						name="company"
						handleClick={event => this.props.handleClick(event, 'company')}
						isSelected = {this.props.selected === "company"}
					/>
					<FilterButton
						text="Departamento"
						name="department"
						handleClick={event => this.props.handleClick(event, 'department')}
						isSelected = {this.props.selected === "department"}
					/>
					<FilterButton
						text="Data de admissão"
						name="admissionDate"
						handleClick={event => this.props.handleClick(event, 'admissionDate')}
						isSelected = {this.props.selected === "admissionDate"}
					/>
					
				</section>
			</div>
		);
	}
}

export default Filters;
