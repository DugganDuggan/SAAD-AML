### API Endpoint 1: Browse Media

**Endpoint**: GET /api/browseMedia  
**Description**: Fetches a list of media items, filtered by genre, type, and sorted according to users inputs.  

**Headers**:

- `Content-Type`: application/json  

**Query Parameters**:

- `genres` (type: string, optional): array of genres to filter by
- `types` (type: string, optional): array of types to filter by
- `sort` (type: string, optional): value to sort results by

**Response**:

- Status: 200 OK  
- Body:

```json
[
  {
    "media_ID": 1,
    "title": "Example Title",
    "author": "Author Name",
    "genre": "Fiction",
    "description": "Description of the media",
    "cover_Image_URL": "https://example.jpg",
    "type": "Book",
    "language": "English",
    "publication_Year": "2010"
  },
  ...
]
```

---

### API Endpoint 2: Specific Media Details

**Endpoint**: GET /api/specificMedia  
**Description**: Fetches details of a specific media item by its ID.  

**Headers**:

- `Content-Type`: application/json  

**Query Parameters**:

- `mediaID` (type: integer, required): ID of the specific media item  

**Response**:

- Status: 200 OK  
- Body:

```json
{
  "media_ID": 1,
  "title": "Example Title",
  "author": "Author Name",
  "genre": "Fiction",
  "description": "Description of the media",
  "cover_Image_URL": "https://example.jpg",
  "type": "Book",
  "language": "English",
  "publication_Year": "2010"
}
```

---

### API Endpoint 3: Search Media

**Endpoint**: GET /api/searchMedia  
**Description**: Searches media items by title, author, or genre based on a search term

**Headers**:

- `Content-Type`: application/json  

**Query Parameters**:

- `searchTerm` (type: string, required): The key word or phrase to search for

**Response**:

- Status: 200 OK  
- Body:

```json
[
  {
  "media_ID": 1,
  "title": "Example Title",
  "author": "Author Name",
  "genre": "Fiction",
  "description": "Description of the media",
  "cover_Image_URL": "https://example.jpg",
  "type": "Book",
  "language": "English",
  "publication_Year": "2010"
  },
  ...
]