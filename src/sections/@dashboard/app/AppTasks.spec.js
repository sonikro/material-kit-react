import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AppTasks from './AppTasks'

describe("AppTask", () => {

  it("checks the item when clicked", async () => {
    // ARRANGE
    render(<AppTasks
      title="Tasks"
      list={[
        { id: '1', label: 'Create FireStone Logo' },
        { id: '2', label: 'Add SCSS and JS files if required' },
        { id: '3', label: 'Stakeholder Meeting' },
        { id: '4', label: 'Scoping & Estimations' },
        { id: '5', label: 'Sprint Showcase' },
      ]}
    />)
    
    // ACT
    await userEvent.click(screen.getByText('Create FireStone Logo'))
    
    // ASSERT
    expect(screen.getByTestId(`taskitem-checkbox-1`).firstChild).toBeChecked()
  })

  it("unchecks the item when clicked", async () => {
    // ARRANGE
    render(<AppTasks
      title="Tasks"
      list={[
        { id: '1', label: 'Create FireStone Logo' },
        { id: '2', label: 'Add SCSS and JS files if required' },
        { id: '3', label: 'Stakeholder Meeting' },
        { id: '4', label: 'Scoping & Estimations' },
        { id: '5', label: 'Sprint Showcase' },
      ]}
    />)
    
    // ACT
    await userEvent.click(screen.getByText('Create FireStone Logo'))
    
    // ASSERT
    expect(screen.getByTestId(`taskitem-checkbox-1`).firstChild).toBeChecked()

    await userEvent.click(screen.getByText('Create FireStone Logo'))

    expect(screen.getByTestId(`taskitem-checkbox-1`).firstChild).not.toBeChecked()


  })
})