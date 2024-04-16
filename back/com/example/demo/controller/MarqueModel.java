package com.example.demo.controller;

import com.example.demo.entity.Marque;
import com.karana.etu2060.framework.annotation.*;
import com.karana.etu2060.framework.annotation.property.*;
import com.dao.database.GenericDao;

@RequestMapping(path = "/marque")
public class MarqueModel {
	private Marque entity = new Marque();

	@Url(method = HttpMethod.POST)
	@Json
	public Object save(@RequestBody Marque marque){
	 	try{
			GenericDao.save(null, marque);
			return "saved successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.PUT)
	@Json
	public Object update(@RequestBody Marque marque){
	 	try{
			GenericDao.update(null, marque);
			return "updated successfully";
		}catch(Exception e){
			return "Bad request";
		}
	}
	@Url(method = HttpMethod.DELETE)
	@Json
	public Object delete(@RequestBody Marque marque){
	 	try{
			GenericDao.delete(null, marque);
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
