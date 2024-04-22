package com.example.demo.entity;

import com.dao.annotation.*;
import com.dao.annotation.conf.ForeignType;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Table(name = "produit")
public class Produit {
	@Column(name = "prix")
	BigDecimal prix;
	@Column(name = "date_produit")
	Timestamp dateProduit;
	@ForeignKey(mappedBy = "idmarque", foreignType = ForeignType.OneToMany)
	Marque marque;
	@Column(name = "description")
	String description;
	@PrimaryKey
	@GeneratedValue(autoIncrement = true)
	@Column(name = "id")
	Integer id;
	@Column(name = "qualite")
	BigDecimal qualite;
	@Column(name = "nom")
	String nom;
	@Column(name = "devise")
	String devise;


	public Produit(){}
	public BigDecimal getPrix(){
		return this.prix;
	}
	public void setPrix(BigDecimal prix){
		this.prix = prix;
	}
	public Timestamp getDateProduit(){
		return this.dateProduit;
	}
	public void setDateProduit(Timestamp dateProduit){
		this.dateProduit = dateProduit;
	}
	public Marque getMarque(){
		return this.marque;
	}
	public void setMarque(Marque marque){
		this.marque = marque;
	}
	public String getDescription(){
		return this.description;
	}
	public void setDescription(String description){
		this.description = description;
	}
	public Integer getId(){
		return this.id;
	}
	public void setId(Integer id){
		this.id = id;
	}
	public BigDecimal getQualite(){
		return this.qualite;
	}
	public void setQualite(BigDecimal qualite){
		this.qualite = qualite;
	}
	public String getNom(){
		return this.nom;
	}
	public void setNom(String nom){
		this.nom = nom;
	}
	public String getDevise(){
		return this.devise;
	}
	public void setDevise(String devise){
		this.devise = devise;
	}

}
