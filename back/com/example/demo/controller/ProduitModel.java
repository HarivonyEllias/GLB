package com.example.demo.controller;

import com.example.demo.entity.Produit;
import com.karana.etu2060.framework.annotation.*;
import com.karana.etu2060.framework.annotation.property.*;
import com.dao.database.GenericDao;

@RequestMapping(path = "/produit")
@Cors(allowedOrigin = "*")
public class ProduitModel {
	private Produit entity = new Produit();

	@Url(method = HttpMethod.POST)
	@Json
	public Object save(@RequestBody Produit produit){
	 	try{
			GenericDao.save(null, produit);
			return "saved successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.PUT)
	@Json
	public Object update(@RequestBody Produit produit){
	 	try{
			GenericDao.update(null, produit);
			return "updated successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.DELETE)
	@Json
	public Object delete(@RequestBody Produit produit){
	 	try{
			GenericDao.delete(null, produit);
			return "deleted successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.GET,url="")
	@Json
	public Object findAll(){
	 	try{
			return GenericDao.findAll(null, entity);
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.GET, url= "/page")
	@Json
	public Object findAllWithPagination(@RequestParam(parameterName = "pageSize") int pageSize,@RequestParam(parameterName = "offset") int offset){
	 	try{
			return GenericDao.findAll(null, entity,pageSize,offset);
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.GET, url= "/total-count")
	@Json
	public Object getTotalCount(){
	 	try{
			return GenericDao.getTotalCount(null, entity);
		}catch(Exception e){
			return "Bad request";
		}
	}


}
