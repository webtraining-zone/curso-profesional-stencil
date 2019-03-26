import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'web-countries-finder',
  styleUrls: ['countries-finder.scss', 'loader.scss'],
})
export class CountriesFinder {
  @Prop() keyword: string = 'mexico';
  @State() countries: Array<any> = [];

  render() {

    return (
      <div class={'web-c-countries-finder'}>
        {this.countries.length == 0 ?
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div> :
          this.countries.map(country =>
            <div class="country-card">
              <div class="country-card__body">
                <div class="country-card__flag-container">
                  <div class="country-card__flag">
                    <span class="flag flag-ci"></span>
                  </div>
                </div>
                <div class="country-card__text-container">
                  <h3>{country.name.common}</h3>
                  <div class="bottom clearfix">
                    <p>
                      <strong>Official Name: </strong>{country.name.official}
                    </p>

                    <p>
                      <strong>Currency: </strong>{country.currency}
                    </p>
                    <p>
                      <strong>Languages: </strong><span>{this.mapObjToArray(
                      country.languages)}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>,
          )
        }

      </div>
    );
  }

  mapObjToArray(obj) {
    const array = [];
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        array.push(obj[property]);
      }
    }

    return array;
  }

  componentWillLoad() {
    const serviceURL = `http://countries-finder-api.webtraining.fun/countries/search/${this.keyword}`;
    fetch(serviceURL).
      then((response: Response) => response.json()).
      then(response => {

        this.countries = this.mapObjToArray(response);
        console.log(this.countries);
      });
  }
}
