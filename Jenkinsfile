pipeline {
    agent {
        docker {
            image 'node'
            args '-p 2000:8080'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'ls -a'
            }
        }
    }
}