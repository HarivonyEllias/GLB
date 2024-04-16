package com.example.demo.controller;

import com.example.demo.entity.Categorie;
import com.karana.etu2060.framework.annotation.*;
import com.karana.etu2060.framework.annotation.property.*;
import com.dao.database.GenericDao;

@RequestMapping(path = "/categorie")
public class CategorieModel {
	private Categorie entity = new Categorie();

	@Url(method = HttpMethod.POST)
	@Json
	public Object save(@RequestBody Categorie categorie){
	 	try{
			GenericDao.save(null, categorie);
			return "saved successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.PUT)
	@Json
	public Object update(@RequestBody Categorie categorie){
	 	try{
			GenericDao.update(null, categorie);
			return "updated successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.DELETE)
	@Json
	public Object delete(@RequestBody Categorie categorie){
	 	try{
			GenericDao.delete(null, categorie);
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
