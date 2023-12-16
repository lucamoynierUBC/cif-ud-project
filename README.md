<!-- DCP LOGO -->
<br />
<p align="center">
    <img 
        className="logo-icon"
        alt="NYC Planning"
        src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo_white_772.png"
            width = "100">
    </img>
</p>

## About the project
3D web app for the Urban Design team at NYC Department of City Planning. This tool is meant to communicate NYC Department of City Planning's [City of Yes](https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-overview.page) initiative.
<br />
<br />
**Disclaimer**:
<br />
 This project was conducted independently and is not an official part of City of Yes Housing Oppurtunity. The use of COY HO in this test was solely for demonstration purposes, and any references to it are not meant to imply official association.​

### Built with

* React JS - Frontend
* Node JS - Backend
* Three JS - 3D library
* Vite - Build tool

## Setup
To get a local copy up and running follow these steps:
Download [Node.js](https://nodejs.org/en/download/).
Clone this repo: `https://github.com/lucamoynierUBC/cif-ud-project.git`
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

## Project tree

 * [📁 public](./public) - *contains all .gltf files*
 * [📁 src](./src)
   * [📁 3DAssets](./src/3DAssets) - *contains all .gltf components*
   * [📁 Depracted](./src/Depracated) - *contains unused components*
   * [📁 House](./src/House) - *contains all components related to the 3D house object*
        * [📁 Tags](./src/House/Tags) - *contains tags for the house*
   * [📁 IntroModal](./src/IntroModal) - *contains all components related to pop-up modal*
   * [📁 Nav](./src/Nav) - *contains all components related to the nav bar*
   * [📁 Stores](./src/stores) - *Global states*
   * [📁 Three JS](./src/ThreeJS) - *contains all helpers for Three.js*
   * [📁 User Interface](./src/UserInterface/) - *contains all components related to the interface*
        * [📁 Content](./src/UserInterface/Content/)
   * [📄 Experience](./src/Experience.jsx) - *Overall experience component*
   * [📄 index](./src/index.jsx) - *App entry point*