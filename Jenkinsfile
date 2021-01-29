pipeline{
    
    agent {label 'ubuntu20'}
    stages {
        stage('first Stage'){
            steps{
                echo 'Hello First Stage...'
                sh 'uname -a'
                sh 'id'
            }
            post {
                always {
                    sh 'npm install'
                }
            }
        }

        stage('second Stage'){
            steps{
                echo 'Hello second Stage...'
            }
            post {
                always {
                    sh 'yarn'
                }
            }
        }
    }
    
}
