import Row from "../components/Row";

export default function () {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-primary">primary</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-primary-lighter border border-primary' />
          <div className='rounded-sm h-10 w-10 bg-primary-light border border-primary' />
          <div className='rounded-sm h-10 w-10 bg-primary border border-primary' />
          <div className='rounded-sm h-10 w-10 bg-primary-dark border border-primary' />
          <div className='rounded-sm h-10 w-10 bg-primary-darker border border-primary' />
        </Row>
      </div>

      <div>
        <p className="text-secondary">secondary</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-secondary-lighter border border-secondary' />
          <div className='rounded-sm h-10 w-10 bg-secondary-light border border-secondary' />
          <div className='rounded-sm h-10 w-10 bg-secondary border border-secondary' />
          <div className='rounded-sm h-10 w-10 bg-secondary-dark border border-secondary' />
          <div className='rounded-sm h-10 w-10 bg-secondary-darker border border-secondary' />
        </Row>
      </div>

      <div>
        <p className="text-success">success</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-success-lighter border border-success' />
          <div className='rounded-sm h-10 w-10 bg-success-light border border-success' />
          <div className='rounded-sm h-10 w-10 bg-success border border-success' />
          <div className='rounded-sm h-10 w-10 bg-success-dark border border-success' />
          <div className='rounded-sm h-10 w-10 bg-success-darker border border-success' />
        </Row>
      </div>

      <div>
        <p className="text-info">info</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-info-lighter border border-info' />
          <div className='rounded-sm h-10 w-10 bg-info-light border border-info' />
          <div className='rounded-sm h-10 w-10 bg-info border border-info' />
          <div className='rounded-sm h-10 w-10 bg-info-dark border border-info' />
          <div className='rounded-sm h-10 w-10 bg-info-darker border border-info' />
        </Row>
      </div>

      <div>
        <p className="text-danger">danger</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-danger-lighter border border-danger' />
          <div className='rounded-sm h-10 w-10 bg-danger-light border border-danger' />
          <div className='rounded-sm h-10 w-10 bg-danger border border-danger' />
          <div className='rounded-sm h-10 w-10 bg-danger-dark border border-danger' />
          <div className='rounded-sm h-10 w-10 bg-danger-darker border border-danger' />
        </Row>
      </div>

      <div>
        <p className="text-warning">warning</p>
        <Row>
          <div className='rounded-sm h-10 w-10 bg-warning-lighter border border-warning' />
          <div className='rounded-sm h-10 w-10 bg-warning-light border border-warning' />
          <div className='rounded-sm h-10 w-10 bg-warning border border-warning' />
          <div className='rounded-sm h-10 w-10 bg-warning-dark border border-warning' />
          <div className='rounded-sm h-10 w-10 bg-warning-darker border border-warning' />
        </Row>
      </div>
    </div>
  )
}