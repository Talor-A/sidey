---
---

# Bookshelf
This is a selection of books I own, inspired by <https://patrickcollison.com/bookshelf>. My favorites are marked with a star.
The below list is generated from my Goodreads account.

{% assign sorted-books = site.data.goodreads_library_export | sort: 'Date Added' %}

{% assign read-books = sorted-books | where: "Exclusive Shelf","read" %}

## Read
{% for book in read-books %}
- {% if book["My Rating"] == "5" %}✨ {%endif%}{{ book["Title"] }}
{% endfor %}

## Currently Reading
{% assign current-books = sorted-books | where: "Exclusive Shelf","currently-reading" %}
{% for book in current-books %}
- 📖 {{ book["Title"] }}
{% endfor %}

## Up Next
{% assign to-read = sorted-books | where: "Exclusive Shelf","to-read" %}
{% for book in to-read %}
- 📘 {{ book["Title"] }}
{% endfor %}
