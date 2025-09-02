import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Produto } from './produto';

@Injectable({
 providedIn: 'root'
})
export class ProdutoService {
  private produtosUrl =  "http://localhost:3000/produto";
  private http: HttpClient; 
  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
 };
  constructor(http: HttpClient) { this.http = http; }

  private handleError<T>(operation:string = 'operation', result?: T){
  return (error: any): Observable<T> => {
  console.error(operation+" :: "+error); 
  return of(result as T);
 };
 }
 adicionar(produto: Produto): Observable<Produto>{
  return this.http.post<Produto>(this.produtosUrl, produto, 
  this.httpOptions).pipe(
  tap((novo: Produto) => 
  console.log(`Adicionado id=${novo._id}`)),
  catchError(this.handleError<Produto>('adicionar'))
 );
 }
 remover(_id: string): Observable<Produto>{
  const url = `${this.produtosUrl}/${_id}`;
  return this.http.delete<Produto>(url, this.httpOptions).pipe(
  tap(_ => console.log(`Removido id=${_id}`)),
  catchError(this.handleError<Produto>('remover'))
 );
 }
 obterTodos():Observable<Produto[]> {
  return this.http.get<Produto[]>(this.produtosUrl).pipe(
  tap(_ => console.log('Produtos recuperados')),
  catchError(this.handleError<Produto[]>('obterTodos', []))
 );
 }
}