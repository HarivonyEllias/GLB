package com.example.demo.controller;

import com.example.demo.entity.Produit;
import com.karana.etu2060.framework.annotation.*;
import com.karana.etu2060.framework.annotation.property.*;
import com.dao.database.GenericDao;

@RequestMapping(path = "/produit")
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
	@Url(method = HttpMethod.GET)
	@Json
	public Object findAll(){
	 	try{
			return GenericDao.findAll(null, entity);
		}catch(Exception e){
			return "Bad request";
		}
	}


}
