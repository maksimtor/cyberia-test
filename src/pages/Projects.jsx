import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

import { ProjectCard } from '../components/ProjectCard'

import '../assets/css/Projects.css'
import '../assets/css/FeedbackForm.css'
import '../assets/css/Breadcrumbs.css'

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    boxShadow: 'none',
  },
  input: {
    color: "white"
  }
});

class Regpage extends Component {
  state = {
    isLoggedIn: false,
    username: '',
    email: '',
    password: '',
    fields: {},
    errors: {},
    selectedCategory: null,
    projectcategories: [{}],
    projects: [{
      "id": 30,
      "title": "Манна Маркетплейс",
      "slug": "manna-marketplace",
      "project_url": null,
      "image": "https://backend.cyberia.studio/storage/2023/01/16/790ba2952f26c2b09bc46e3b4f939c7c4dd76c57.png",
      "image_dark": "https://backend.cyberia.studio/storage/2023/01/16/790ba2952f26c2b09bc46e3b4f939c7c4dd76c57.png",
      "description": "Региональная торговая онлайн-площадка для удобного и быстрого шоппинга в любое время",
      "geo": {
        "lat": null,
        "lng": null
      },
      "categories": [
        {
          "id": 12,
          "name": "Backend"
        }
      ]
    }]
  }

  handleValidation = async (e) => {
    e.preventDefault();
    let copyErrors = {}
    this.setState({ errors: {} });

    //Name
    if (!this.state.phone) {
      copyErrors.phone = "Cannot be empty";
    }
    else {
      let phone = this.state.phone.replace(/[^\d]/g, '');
      if (phone.length > 10 && phone.length < 12) {

      }
      else {
        alert(phone)
        copyErrors.phone = "Wrong number"
      }
    }
    if (!this.state.message) {
      copyErrors.message = "Cannot be empty";
    }
    if (typeof this.state.email !== "undefined") {
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          this.state.email.length - lastDotPos > 2
        )
      ) {
        copyErrors.email = "Email is not valid";
      }
    }
    if (!this.state.email) {
      copyErrors.email = "Cannot be empty";
    }
    this.setState({ errors: copyErrors });
    if (Object.keys(copyErrors).length === 0) {
      fetch('https://backend.cyberia.studio/api/v1/feedbacks/', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify({ email: this.state.email, phone: this.state.phone, message: this.state.message }), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          if (response.status === 200) {
            response.json().then((text) => {
              alert(text.message)
            });
          }
          else {
            console.log("Could not send messages. Response code is " + response.status)
          }
        });
    }

  }

  componentDidMount() {
    fetch('https://backend.cyberia.studio/api/v1/projects/', {
      method: 'GET', // или 'PUT'
      // body: JSON.stringify({'user_id': user.user_id}), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then((text) => {
            this.setState({ projects: text.items })
          });
        }
        else {
          console.log("Could not get projects. Response code is " + response.status)
        }
      });

    fetch('https://backend.cyberia.studio/api/v1/project-categories/', {
      method: 'GET', // или 'PUT'
      // body: JSON.stringify({'user_id': user.user_id}), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then((text) => {
            this.setState({ projectcategories: text.items })
          });
        }
        else {
          console.log("Could not get categories. Response code is " + response.status)
        }
      });

  }

  render() {
    return (
      <Container component="main">
        <div>
          <div>
            <div className='sp__categories'>
              {this.state.projectcategories.map(function (category) {
                return (
                  this.state.selectedCategory === category.name ? <>
                    <div className='sp__category selected' onClick={() => this.setState({ selectedCategory: null })}>{category.name}</div>
                  </> : <><div className='sp__category' onClick={() => this.setState({ selectedCategory: category.name })}>{category.name}</div></>)
              }, this)}
            </div>
            <div className='cardContainer'>
              {this.state.projects.map(function (project) {
                return (
                  this.state.selectedCategory === null || project.categories.some(e => e.name === this.state.selectedCategory)) ? <>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    url={project.url}>
                  </ProjectCard>
                </> : <></>
              }, this)}
            </div>
          </div>

        </div>
      </Container>
    )

  }
}
export default withStyles(useStyles)(Regpage);