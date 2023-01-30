pipeline {

  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

  stages {

    stage('Build') {

      steps {
        sh 'docker build -t kalwar/ratinmaze:latest .'
      }
    }

    stage('Login') {

      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Push') {

      steps {
        sh 'docker push kalwar/ratinmaze:latest'
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }

}
