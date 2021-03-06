import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

let outer: any;
Observable.of(1).map(value => Math.ceil(value)).subscribe();
of(1).pipe(map(value => Math.ceil(value))).subscribe();
