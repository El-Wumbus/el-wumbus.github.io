default: build

install:
	npm install

build:
	cd Aidan\ Neal
	npm run lint
	npm run build
	cd ..

run:
	cd Aidan\ Neal
	npm run lint
	npm run dev
	cd ..

package: build
	cd Aidan\ Neal
	zip -9vr ../Aidan-Neal-html.zip dist/
	cd ..