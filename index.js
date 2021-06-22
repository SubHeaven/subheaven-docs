require('subheaven-tools');

module.exports = (module_name) => {
    if (!this.maps) this.maps = {};
    if (!this.maps[module_name]) this.maps[module_name] = {};
    let mod = {};
    mod.maps = async() => this.maps[module_name];
    mod.function = (function_name, description) => {
        this.maps[module_name][function_name] = {
            name: function_name,
            desc: description,
            params: {}
        };

        var function_obj = {
            param: (name, description) => {
                this.maps[module_name][function_name].params[name] = description;
                return function_obj;
            }
        }

        return function_obj;
    }
    mod.help = async() => {
        await Object.keys(this.maps[module_name]).forEachAsync(async item => {
            console.log("");
            var declaration = `${item}(`;
            let comma = '';
            await Object.keys(this.maps[module_name][item].params).forEachAsync(param => {
                declaration += `${comma}${param}`;
                comma = ', ';
            });
            declaration += `) => ${this.maps[module_name][item].desc}`;
            console.log(`#${declaration}`);
            await Object.keys(this.maps[module_name][item].params).forEachAsync(async param => {
                let det = await this.maps[module_name][item];
                console.log(`    ${param}: ${det.params[param]}`);
            });
        });
    }
    return mod;
}