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

 * [📁 public](./public) - contains all .gltf files
 * [📁 src](./src)
   * [📁 3DAssets](./src/3DAssets) - contains all .gltf components
        * [📄 BackgroundModel](./src/3DAssets/BackgroundModel.jsx)
        * [📄 Birds](./src/3DAssets/Birds.jsx)
        * [📄 Bus](./src/3DAssets/Bus.jsx)
        * [📄 Car](./src/3DAssets/Car.jsx)
        * [📄 Person](./src/3DAssets/Person.jsx)
   * [📁 House](./src/House) - contains all components related to the 3D house object
        * [📁 Tags](./src/House/Tags) - contains tags for the house
            * [📄 Attatched Tag](./src/House/Tags/AttatchedTag.jsx)
            * [📄 Detatched Tag](./src/House/Tags/DetatchedTag.jsx)
            * [📄 Baement Tag](./src/House/Tags/BasementTag.jsx)
            * [📄 Attic Tag](./src/House/Tags/AtticTag.jsx)
        * [📄 Detatched ADU](./src/House/DetatchedAdu.jsx)
        * [📄 House](./src/House/House.jsx) - main component for the house
        * [📄 Shed](./src/House/Shed.jsx)
   * [📁 IntroModal](./src/IntroModal) - contains all components related to pop-up modal
        * [📄 Carousel](./src/IntroModal/Carousel.jsx) - component for the carousel/swiper
        * [📄 Modal](./src/IntroModal/Modal.jsx) - main component for modal
   * [📁 Nav](./src/Nav) - contains all components related to the nav bar
        * [📄 Dropdown Item](./src/Nav/DropdownItem.jsx)
        * [📄 Dropdown Menu](./src/Nav/DropdownMenu.jsx)
        * [📄 Nav](./src/Nav/Nav.jsx) - main component for nav bar
        * [📄 Nav Bar](./src/Nav/NavBar.jsx)
        * [📄 Nav Icon Buttom](./src/Nav/NavItem.jsx)
        * [📄 Nav Logo](./src/Nav/NavLogo.jsx)
        * [📄 Nav Text Button](./src/Nav)
    * [📁 Stores](./src/stores) - Global states
        * [📄 useActions](./src/stores/useActions.jsx)
        * [📄 useApp](./src/stores/useApp.jsx)
        * [📄 useCamera](./src/stores/useCamera.jsx)
        * [📄 useFlow](./src/stores/useFlow.jsx)
        * [📄 useModal](./src/stores/Modal.jsx)
        * [📄 useInterface](./src/stores/useInterface.jsx)
    * [📁 Three JS](./src/ThreeJS) - contains all helpers for Three.js
        * [📄 Camera](./src/ThreeJS/Camera.jsx)
        * [📄 Orbit Controls](./src/ThreeJS/Controls.jsx)
        * [📄 Outline Effect](./src/ThreeJS/OutlineEffect.jsx)
        * [📄 Spawner](./src/ThreeJS/Spawner.jsx)
    * [📁 User Interface](./src/UserInterface/) - contains all components related to the interface
        * [📁 Content](./src/UserInterface/Content/)
            * [📄 Attatched ADU Conent](./src/UserInterface/Content/AttatchedContent.jsx)
            * [📄 Attic ADU Content](./src/UserInterface/Content/AtticContent.jsx)
            * [📄 Basement ADU Content](./src/UserInterface/Content/BasementContent.jsx)
            * [📄 Detatched ADU Content](./src/UserInterface/Content/DetatchedContent.jsx)
        * [📄 Caret](./src/UserInterface/Caret.jsx)
        * [📄 Dropdown text](./src/UserInterface/Dropdown.jsx)
        * [📄 Main Interface](./src/UserInterface/MainInterface.jsx) - main component for interface
    * [📄 Experience](./src/Experience.jsx) - Overall experience component
    * [📄 index](./src/index.jsx) - App entry point

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