<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

### Built With

[![Nuxt][Nuxt.js]][Nuxt-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://tennis-traunreut.de/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TUS Tennis Traunreut</h3>

  <p align="center">
    The official website of TUS Tennis Traunreut - A modern tennis club website built with Nuxt 4
    <br />
    <a href="https://tennis-traunreut.de/"><strong>Visit the site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/anarchos-websolutions/tus-traunreut-tennis/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/anarchos-websolutions/tus-traunreut-tennis/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is the official website for TUS Tennis Traunreut, a modern tennis club website built with cutting-edge web technologies. The site provides comprehensive information about the tennis club, including facilities, training schedules, member information, and court booking capabilities.

### Key Features:
* **Modern Design**: Built with Nuxt 4 and Vue 3 for optimal performance and user experience
* **Responsive Layout**: Fully responsive design that works on all devices
* **Court Booking System**: Integrated booking functionality for tennis courts
* **Member Portal**: Dedicated sections for club members
* **Training Information**: Comprehensive training schedules and information
* **Facility Overview**: Detailed information about club facilities and amenities
* **News & Updates**: Latest news and announcements from the tennis club

### Technology Stack:
* **Frontend**: Nuxt 4, Vue 3, TypeScript
* **Styling**: Tailwind CSS with Nuxt UI components
* **Icons**: Nuxt Icon for consistent iconography
* **Content**: Nuxt Content for dynamic content management
* **Performance**: Optimized for Core Web Vitals and SEO

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy of the TUS Tennis Traunreut website up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed:

**For Docker-based development (Recommended):**
* Docker (latest version)
* Git
* Just (optional, for justfile commands)

**For local development:**
* Node.js (version 18 or higher)
* npm or yarn package manager
* Git

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/anarchos-websolutions/tus-traunreut-tennis.git
   cd tus-traunreut-tennis
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start the development server
   ```sh
   npm run dev
   ```

4. Install just (optional)
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s
  export PATH="$PATH:$HOME/bin"
  ```

5. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

#### Using Docker (Recommended)
The project includes both a `justfile` and a shell script for running commands in a consistent Node.js 24 Docker environment:

**With Just (if installed):**
```bash
just install    # Install dependencies
just dev        # Start development server
just build      # Build for production
just generate   # Generate static site
just preview    # Preview production build
just clean      # Clean node_modules
just info       # Show Docker/Node versions
```

**With Shell Script:**
```bash
./scripts/docker-npm.sh install    # Install dependencies
./scripts/docker-npm.sh dev       # Start development server
./scripts/docker-npm.sh build     # Build for production
./scripts/docker-npm.sh generate  # Generate static site
./scripts/docker-npm.sh preview    # Preview production build
./scripts/docker-npm.sh clean     # Clean node_modules
./scripts/docker-npm.sh info      # Show Docker/Node versions
```

#### Direct npm (requires local Node.js)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The TUS Tennis Traunreut website serves as the central hub for the tennis club, providing various functionalities:

### For Club Members
- **Court Booking**: Members can book tennis courts through the integrated booking system
- **Training Schedules**: Access to training times and coaching information
- **Member Portal**: Dedicated area with member-specific information and resources

### For Visitors
- **Club Information**: Learn about the tennis club's history, facilities, and amenities
- **Contact Details**: Find contact information and location details
- **News & Updates**: Stay informed about club events and announcements

### For Administrators
- **Content Management**: Easy content updates through the Nuxt Content system
- **Performance Monitoring**: Built-in performance optimizations and SEO features

### Project Structure
```
tus-traunreut-tennis/
├── app/
│   ├── components/          # Vue components
│   ├── pages/              # Application pages
│   ├── assets/            # Static assets
│   └── app.vue            # Main app component
├── docs/                  # Documentation
├── public/               # Public assets
└── nuxt.config.ts        # Nuxt configuration
```

_For detailed development guidelines, please refer to the [Nuxt 4 Development Guide](docs/nuxt-4-development-guide.md)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Initial website setup with Nuxt 4
- [x] Basic page structure and navigation
- [x] Responsive design implementation
- [x] Court booking system integration
- [x] Member portal development
- [ ] Advanced booking features
- [ ] Payment integration for court bookings
- [ ] Mobile app development
- [ ] Multi-language support (German/English)
- [ ] Advanced analytics and reporting
- [ ] Integration with club management systems

See the [open issues](https://github.com/anarchos-websolutions/tus-traunreut-tennis/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/othneildrew/Best-README-Template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=othneildrew/Best-README-Template" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

TUS Tennis Traunreut - [Website](https://tennis-traunreut.de/) - [Email](mailto:info@tennis-traunreut.de)

Project Link: [https://github.com/anarchos-websolutions/tus-traunreut-tennis](https://github.com/anarchos-websolutions/tus-traunreut-tennis)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project was built using modern web technologies and excellent open-source tools:

* [Nuxt 4](https://nuxt.com/) - The intuitive Vue framework
* [Vue 3](https://vuejs.org/) - The progressive JavaScript framework
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
* [Nuxt UI](https://ui.nuxt.com/) - Beautiful UI components for Nuxt
* [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
* [Nuxt Icon](https://iconify.design/) - Beautiful icons for Nuxt
* [Nuxt Content](https://content.nuxt.com/) - File-based CMS for Nuxt

Special thanks to the TUS Tennis Traunreut club members and the development team at Anarchos Web Solutions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/anarchos-websolutions/tus-traunreut-tennis.svg?style=for-the-badge
[contributors-url]: https://github.com/anarchos-websolutions/tus-traunreut-tennis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/anarchos-websolutions/tus-traunreut-tennis.svg?style=for-the-badge
[forks-url]: https://github.com/anarchos-websolutions/tus-traunreut-tennis/network/members
[stars-shield]: https://img.shields.io/github/stars/anarchos-websolutions/tus-traunreut-tennis.svg?style=for-the-badge
[stars-url]: https://github.com/anarchos-websolutions/tus-traunreut-tennis/stargazers
[issues-shield]: https://img.shields.io/github/issues/anarchos-websolutions/tus-traunreut-tennis.svg?style=for-the-badge
[issues-url]: https://github.com/anarchos-websolutions/tus-traunreut-tennis/issues
[license-shield]: https://img.shields.io/github/license/anarchos-websolutions/tus-traunreut-tennis.svg?style=for-the-badge
[license-url]: https://github.com/anarchos-websolutions/tus-traunreut-tennis/blob/main/LICENSE
[Nuxt.js]: https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white
[Nuxt-url]: https://nuxt.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/ 