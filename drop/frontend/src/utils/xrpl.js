import { RippleAPI } from 'ripple-lib'
class xrpl {
 constructor(){
  this.api = new RippleAPI({
    server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
  });

  this.api.on('error', (errorCode, errorMessage) => {
      console.log(errorCode + ': ' + errorMessage);
    });
    this.api.on('connected', () => {
      console.log('connected');
    });
    this.api.on('disconnected', (code) => {
      console.log('disconnected, code:', code);
    });
    console.log('Connecting to the XRPL...')
    this.api.connect()
    }
    
    // async connect(){
    //   try {
    //     await this.api.connect()
    //   } catch (e){
    //     console.log(e.message)
    //   }
    // }
    async exec(fn, name = 'do something') {
      if (!this.api.isConnected()) return { error: 'Not connected to XRPL' }
  
      try {
        console.log(`Querying XRPL to ${name}...`)
        const result = await fn()
        console.log('Done.')
        return result
      } catch (e) {
        console.log(e.message)
        return { error: e.message }
      }
    }
    async ledgerInfo(){
      return await this.exec(async () => {
        const options = {
          includeAllData:true,
          includeTransactions:true
        }
        return await this.api.getLedger(options);
      })
    }
    // async ledgerInfo(){
    //   const options = {
    //     includeAllData:true,
    //     includeTransactions:true
    //   }
    //   const ledgernum = await this.api.getLedger(options);
    //     return ledgernum;
    // }





    
    disconnect() {
      if (!this.api.isConnected()) return
      console.log('Disconnecting from XRPL')
      this.api.disconnect()
    }

}

export default new xrpl();
