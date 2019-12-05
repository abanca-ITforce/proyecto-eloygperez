import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {
  url = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';

  constructor(private http: HttpClient ) {}

  getAllCountries() {
    return this.http.get(this.url).pipe(map(data => data ? data[1] : []));
  }

  getAllCountriesFilter() {
    return this.http.get(this.url).pipe(map(data => {
      let finalData = [];
      data[1].forEach(cur => {
        if (cur.capitalCity) {
          finalData.push(cur);
        }
      });
      return this.ordenar(finalData);
    }));
  }

  getCountry(id) {
    return this.http.get(`https://api.worldbank.org/v2/country/${id}?per_page=1000&format=json`)
      .pipe(map(data => data ? data[1][0] : {}));
  }

  getIncomeLevels() {
    return this.http.get('https://api.worldbank.org/v2/incomeLevel/?format=json')
      .pipe(map(data => data ? data[1] : []));
  }

  getLendingTypes() {
    return this.http.get('https://api.worldbank.org/v2/lendingType/?format=json')
      .pipe(map(data => data ? data[1] : []));
  }

  getRegions() {
    return this.http.get('https://api.worldbank.org/v2/region/?format=json')
      .pipe(map(data => data ? this.ordenar(data[1]) : []));
  }

  getRegion(cod) {
    return this.http.get(`https://api.worldbank.org/v2/region/${cod}?format=json`)
       .pipe(map(data => data ? data[1][0] : []));
  }

  getCountriesOfRegion(cod) {
    return this.http.get(`https://api.worldbank.org/v2/country?region=${cod}&per_page=1000&format=json`)
       .pipe(map(data => data ? this.ordenar(data[1]) : []));
  }

  search(data) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.worldbank.org/v2/country?lendingType=${data.lendings}&incomeLevel=${data.incomes}&region=${data.regions}&per_page=1000&format=json`)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(map(data => data ? data[1] : []));
  }

  search2(event: any) {
    let url = 'https://api.worldbank.org/v2/country?';

    // tslint:disable-next-line: curly
    if (event.lendings) url = `${url}lendingType=${event.lendings}&`;
    // tslint:disable-next-line: curly
    if (event.incomes) url = `${url}incomeLevel=${event.incomes}&`;
    // tslint:disable-next-line: curly
    if (event.regions) url = `${url}region=${event.regions}&`;
    url = url + 'per_page=1000&format=json';
    return this.http.get(url).pipe(map(data => {
      let finalData = [];
      data[1].forEach(cur => {
        if (cur.capitalCity) {
          finalData.push(cur);
        }
      });
      return this.ordenar(finalData.slice(-Math.abs(event.numResults)));
    }));
  }

  getCountryIndicators(cod) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.worldbank.org/v2/countries/${cod}/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018&per_page=1000&format=json`)
      .pipe(map(data => {
        let values;
        values = {
          population: data[1][0].value,
          interiorProduct: data[1][1].value
        };
        return values;
      }));
  }

  ordenar(array) {
    return array.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

}
