pipeline{
    
    agent {label 'ubuntu20'}
    
    stages {
                    
        stage('first Stage'){
            steps{
                echo 'Hello First Stage...'
                sh 'uname -a'
                sh 'id'
                sh 'yarn'
            }           
        }
        
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'dist/index.js', fingerprint: true     
        }
    }
    
}
