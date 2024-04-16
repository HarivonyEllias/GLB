package com.example.demo.entity;

import com.dao.annotation.*;
import com.dao.annotation.conf.ForeignType;


@Table(name = "marque")
public class Marque {
	@PrimaryKey
	@GeneratedValue(autoIncrement = true)
	@Column(name = "id")
	Integer id;
	@Column(name = "nom")
	String nom;
	@ForeignKey(mappedBy = "idcategorie", foreignType = ForeignType.OneToMany)
	Categorie categorie;


	public Marque(){}
	public Integer getId(){
		return this.id;
	}
	public void setId(Integer id){
		this.id = id;
	}
	public String getNom(){
		return this.nom;
	}
	public void setNom(String nom){
		this.nom = nom;
	}
	public Categorie getCategorie(){
		return this.categorie;
	}
	public void setCategorie(Categorie categorie){
		this.categorie = categorie;
	}

}
