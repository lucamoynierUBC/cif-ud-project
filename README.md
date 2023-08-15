<!-- DCP LOGO -->
<br />
<p align="center">
    <img 
        className="logo-icon"
        alt="NYC Planning"
        src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo_772.png"
            width = "100">
    </img>
</p>

## About the project

3D web app for the Urban Design team at NYC Department of City Planning. This tool is meant to communicate NYC Department of City Planning's [Good Urban Design Principles](https://www.nyc.gov/site/planning/planning-level/urban-design/urban-design-principle.page) and the [City of Yes](https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-overview.page) initiativw.
<br />
<br />
<span style="color:red;">Disclaimer:</span> This project was conducted independently and is not an official part of City of Yes Housing Oppurtunity. The use of COY HO in this test was solely for demonstration purposes, and any references to it are not meant to imply official association.​

### Built with

* React JS - Frontend
* Node JS - Backend
* Three JS - 3D library
* Vite - Build tool

## Project tree

 * [public](./public)
 * [src](./src)
   * [3DAssets](./src/3DAssets)
        * [BackgroundModel](./src/3DAssets/BackgroundModel.jsx)
        * [Birds](./src/3DAssets/Birds.jsx)
        * [Bus](./src/3DAssets/Bus.jsx)
        * [Car](./src/3DAssets/Car.jsx)
        * [Person](./src/3DAssets/Person.jsx)
   * [House](./src/House)
        * [Tags](./src/House/Tags)
            * [Attatched Tag](./src/House/Tags/AttatchedTag.jsx)
            * [Detatched Tag](./src/House/Tags/DetatchedTag.jsx)
            * [Baement Tag](./src/House/Tags/BasementTag.jsx)
            * [Attic Tag](./src/House/Tags/AtticTag.jsx)
        * [Detatched ADU](./src/House/DetatchedAdu.jsx)
        * [House](./src/House/House.jsx)
        * [Shed](./src/House/Shed.jsx)
   * [IntroModal](./dir2/file23.ext)
 * [dir1](./dir1)
   * [file11.ext](./dir1/file11.ext)
   * [file12.ext](./dir1/file12.ext)
 * [file_in_root.ext](./file_in_root.ext)
 * [README.md](./README.md)
 * [dir3](./dir3)

## Setup
To get a local copy up and running follow these steps:
Download [Node.js](https://nodejs.org/en/download/).
Run the following commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev
```
<!-- Contributing -->
## Contributing
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request