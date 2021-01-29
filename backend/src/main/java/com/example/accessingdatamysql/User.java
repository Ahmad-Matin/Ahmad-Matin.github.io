package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String firstname;

	private String lastname;

	private String email;

	private String password;

	private String address;

	private String unit_no;

	private Integer postal_code;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() { return firstname; }

	public void setFirstName(String firstname) {
		this.firstname = firstname;
	}

	public String getLastName() { return lastname; }

	public void setLastName(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) { this.password = password; }

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) { this.address = address; }

	public String getUnitNo() {
		return unit_no;
	}

	public void setUnitNo(String unit_no) { this.unit_no = unit_no; }

	public Integer getPostalcode(Integer postal_code) {
		return this.postal_code;
	}

	public void setPostalcode(Integer postal_code) { this.postal_code = postal_code; }



}
