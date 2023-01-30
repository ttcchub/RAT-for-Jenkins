pipeline {

  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

  stages {

    stage('Build') {

      steps {
        sh 'echo Hello World'
      }
    }

    stage('Login') {

      steps {
        sh 'echo login'
      }
    }

    stage('Push') {

      steps {
        sh 'echo '
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }

}
